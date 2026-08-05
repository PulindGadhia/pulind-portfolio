export default async function handler(req, res) {
    try {
        const response = await fetch(
            "https://api.github.com/users/PulindGadhia",
            {
                headers: {
                    Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
                    Accept: "application/vnd.github+json"
                }
            }
        );

        const data = await response.json();

        return res.status(response.status).json(data);

    } catch (error) {
        console.error(error);

        return res.status(500).json({
            message: "Failed to fetch GitHub data"
        });
    }
}