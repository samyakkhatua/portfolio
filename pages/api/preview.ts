import type {NextApiRequest, NextApiResponse} from 'next'

// export default function preview(res: NextApiRequest, req:NextApiResponse) {
//     res.setPreviewData({});
//     res.writeHead(307, { Location: "/" });
//     res.end();
// }

export default function preview(req, res) {
    res.setPreviewData({})
    res.writeHead(307, {Location: '/'})
    res.end()
  }