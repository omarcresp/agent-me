import axios from 'axios'

const baseDomain = process.env.AGENT_ME_API || 'http://localhost:3001'
const baseURL = `${baseDomain}/api/v1`

const agentMeClient = axios.create({ baseURL })

export default agentMeClient
