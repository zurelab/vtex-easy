export default interface IApiAdapterResponse<TypeResponse> {
    response: TypeResponse
    status: number
    error: boolean
    message: any
}