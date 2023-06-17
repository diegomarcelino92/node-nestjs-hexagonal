export abstract class BaseEntity<T> {
  raw: T
  constructor(raw: T) {
    this.raw = raw
  }
}
