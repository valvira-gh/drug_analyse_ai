import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
    email: string;
    username: string;
    password: string;
}

export default function handler(
    req: NextApiRequest,
    res: NextApiResponse<Data>
) {
    if (req.method === "POST") {
        // Tarkitukset tähän
        const { email, username, password } = req.body;

        // Palautetaan käyttäjän tiedot vastauksena.
        res.status(200).json({ email, username, password });
    } else {
        // Käsittele muut pyyntötyypit tai palauta virhe
        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}