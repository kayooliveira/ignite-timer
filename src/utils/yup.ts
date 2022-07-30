import * as yup from 'yup'

yup.addMethod(
  yup.number,
  'multipleOf',
  function (multipleOf: number, message?: string) {
    return this.test(
      'multipleOf',
      message || `O valor deve ser um múltiplo de ${multipleOf}`,
      (value: number | undefined) => {
        return value ? value % multipleOf === 0 : false
      },
    )
  },
)

export default yup
