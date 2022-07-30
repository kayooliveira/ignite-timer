import * as yup from 'yup'
import { AnyObject, Maybe } from 'yup/lib/types'

declare module 'yup' {
  interface NumberSchema<
    TType extends Maybe<number> = number | undefined,
    TContext extends AnyObject = AnyObject,
    TOut extends TType = TType,
  > extends yup.BaseSchema<TType, TContext, TOut> {
    multipleOf(
      multipleOf: number,
      message?: string,
    ): NumberSchema<TType, TContext>
  }
}
