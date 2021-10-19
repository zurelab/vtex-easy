export default interface IRestAdapterResponse<TypeResponse> {
    response: TypeResponse
    status: number
    error: boolean
    message: any
}