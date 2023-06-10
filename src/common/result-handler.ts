export class Result<T, E = Error> {
  ok: boolean
  error: E
  value: T

  private constructor(isSuccess: boolean, value?: T, error: E = undefined) {
    this.ok = isSuccess
    this.error = error as E
    this.value = value
  }

  static ok<V>(value: V) {
    return new this(true, value)
  }
  static fail<E>(error: E) {
    return new this(false, undefined, error)
  }
}
