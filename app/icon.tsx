import { ImageResponse } from 'next/og';

// Route segment config
export const runtime = 'edge';

// Image metadata
export const size = {
    width: 32,
    height: 32,
};
export const contentType = 'image/png';

// Image generation
export default function Icon() {
    return new ImageResponse(
        (
            <div
                style={{
                    background: '#02182B',
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '20%',
                }}
            >

                <div style={{
                    fontSize: 22,
                    fontWeight: 900,
                    color: '#ffffff',
                    fontFamily: 'sans-serif',
                }}>
                    WA
                </div>
            </div>
        ),
        {
            ...size,
        }
    );
}
