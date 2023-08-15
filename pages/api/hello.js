// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import fs from 'fs'
import path from 'path'
import getConfig from 'next/config';
// const { serverRuntimeConfig } = getConfig();

// console.log({
//   env: process.env,
//   serverRuntimeConfig,
// })

// TODO: Why don't env variables propagate to here?
// const messagePath = path.join(serverRuntimeConfig.dataPath, 'message')
const messagePath = '/data/message'

function getFileData() {
  try {
    const data = fs.readFileSync(messagePath).toString()
    console.log(data)
    return data
  } catch (_e) {
    return ''
  }
}

function setFileData(newMessage) {
  try {
    fs.writeFileSync(messagePath, newMessage)
  } catch (_e) {
    console.log(_e)
  }
}

export default function hello(req, res) {
  if (req.method === 'PATCH') {
    setFileData(req.body.message.slice(0,280))
    res.status(202)
  } else {
    res.status(200).json({
      server: 'bruh',
      file: getFileData(),
    })
  }
}
