import type { NextApiRequest, NextApiResponse } from 'next';
import { getLastPlayed } from '../../lib/spotify';

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    const response = await getLastPlayed();
    if (response.status === 204 || response.status > 400) {
        return res.status(200).json({ hasPlayed: false });
    }
    const { items } = await response.json();
    const song = items[0].track;
    if (song === null) {
        return res.status(200).json({ hasPlayed: false });
    }
    const hasPlayed = true;
    const title = song.name;
    const artist = song.artists.map((_artist) => _artist.name).join(', ');
    const album = song.album.name;
    const albumImageUrl = song.album.images[0].url;
    const songUrl = song.external_urls.spotify;
    

    res.setHeader(
        'Cache-Control',
        'public, s-maxage=86400, stale-while-revalidate=43200'
    );

    return res.status(200).json({
        title,
        artist,
        album,
        albumImageUrl,
        songUrl,
    });
}