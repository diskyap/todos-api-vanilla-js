import fs from 'fs'

class Utils {
  writeFile(fileName, content) {
    fs.writeFileSync(
      fileName,
      JSON.stringify(content, null, 2),
      'utf8',
      (err) => {
        if (err) {
          console.log(err)
        }
      }
    )
  }

  getPostData(req) {
    return new Promise((resolve, reject) => {
      try {
        let body = ''

        req.on('data', (chunk) => {
          body += chunk.toString()
        })

        req.on('end', () => {
          resolve(body)
        })
      } catch (error) {
        reject(error)
      }
    })
  }
}

export default Utils
