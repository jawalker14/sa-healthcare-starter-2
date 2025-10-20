export async function POST(request: Request) {
    const data = await request.json();

    // Validate the incoming data (minimum fields)
    const { name, email, message, consent } = data;

    if (!name || !email || !message || !consent) {
        return new Response(JSON.stringify({ error: 'Missing required fields' }), {
            status: 400,
            headers: { 'Content-Type': 'application/json' },
        });
    }

    // Here you would typically handle the form submission, e.g., save to a database or send an email

    return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
    });
}