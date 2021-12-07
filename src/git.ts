import { exec } from 'child_process'

const git = (command: string) =>
  new Promise((resolve, reject) => {
    exec(command, (error, stdout, stderr) => {
      if (error) {
        reject(error)
      } else if (typeof stderr !== 'string') {
        reject(stderr)
      } else {
        resolve(stdout)
      }
    })
  })

export default git
