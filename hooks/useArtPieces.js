import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());

export default function useArtPieces() {
  return useSWR("https://example-apis.vercel.app/api/art", fetcher);
}
