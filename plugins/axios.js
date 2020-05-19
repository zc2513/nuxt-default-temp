export default function({ app: { $axios }}) {
    if (process.server) {
        $axios.setBaseURL(process.env.baseUrl)
    }
    if (process.client) {
        $axios.setBaseURL('/api')
    }
}
