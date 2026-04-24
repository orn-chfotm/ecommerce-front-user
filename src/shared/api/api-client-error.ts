import type {ClientErrorResponse, FailResponse, ValidationError} from "./api-types";

const DEFAULT_ALERT = "요청 처리 중 오류가 발생했습니다.";

/**
 * `api-base`가 정규화한 {@link FailResponse}만 받습니다. (래퍼/평면은 파서에서 처리)
 */
export class ApiClientError extends Error {

    public readonly body: FailResponse;

    constructor(
        public readonly errorResponse: ClientErrorResponse,
    ) {
        super(errorResponse.statusCode);
        this.body = errorResponse.body;
        this.name = 'ApiClientError';
    }

    get isValidationFailed() {
        return (this.body.data?.length ?? 0) > 0;
    }

    get firstValidationLine() {
        return this.body.data?.[0]?.message
            ?? this.body.message
            ?? "요청 중 오류가 발생했습니다.";
    }

    get allFieldLines() {
        return this.body.data?.map((e: ValidationError) => `${e.field}: ${e.message}`).join("\n");
    }
}
