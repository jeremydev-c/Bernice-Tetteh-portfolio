import { NextRequest, NextResponse } from 'next/server';
import { readFile } from 'fs/promises';
import { join } from 'path';
import { existsSync } from 'fs';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ path: string[] }> }
) {
  try {
    const resolvedParams = await params;
    // Join path segments and decode to handle special characters like #, spaces, etc.
    let filePath = resolvedParams.path.join('/');
    
    // Try decoding the entire path
    try {
      filePath = decodeURIComponent(filePath);
    } catch (e) {
      // If decoding fails, try decoding each segment
      filePath = resolvedParams.path.map(segment => {
        try {
          return decodeURIComponent(segment);
        } catch {
          return segment;
        }
      }).join('/');
    }
    
    // Remove leading slash if present
    const cleanPath = filePath.startsWith('/') ? filePath.slice(1) : filePath;
    const fullPath = join(process.cwd(), 'public', cleanPath);

    // Check if file exists
    if (!existsSync(fullPath)) {
      console.error('File not found:', fullPath);
      console.error('Requested path:', cleanPath);
      console.error('Original path segments:', resolvedParams.path);
      return new NextResponse(`File not found: ${cleanPath}`, { status: 404 });
    }

    const fileBuffer = await readFile(fullPath);
    const fileName = cleanPath.split('/').pop() || 'certificate.pdf';

    return new NextResponse(fileBuffer, {
      headers: {
        'Content-Type': 'application/pdf',
        'Content-Disposition': `inline; filename="${encodeURIComponent(fileName)}"`,
        'X-Content-Type-Options': 'nosniff',
      },
    });
  } catch (error) {
    console.error('Error serving PDF:', error);
    return new NextResponse(`Error: ${error instanceof Error ? error.message : 'Unknown error'}`, { status: 500 });
  }
}

