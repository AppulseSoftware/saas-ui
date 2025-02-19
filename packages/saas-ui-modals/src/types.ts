import type {
  FieldValues,
  FormProps,
  FormType,
  WithFields,
} from '@saas-ui/forms'
import { AnyObjectSchema, YupFormType } from '@saas-ui/forms/yup'
import { ZodFormType } from '@saas-ui/forms/zod'
import { ModalId } from '@saas-ui/modals-provider'
import type { InferType } from 'yup'
import type { z } from 'zod'

import { FormDialogFieldOverrides } from './form'

export type FormDialogHandler<T> =
  T extends YupFormType<
    infer FieldDefs,
    infer ExtraProps,
    infer ExtraOverrides,
    'yup'
  >
    ? YupHandler<FieldDefs, object, ExtraOverrides & FormDialogFieldOverrides>
    : T extends ZodFormType<
          infer FieldDefs,
          infer ExtraProps,
          infer ExtraOverrides,
          'zod'
        >
      ? ZodHandler<FieldDefs, object, ExtraOverrides & FormDialogFieldOverrides>
      : T extends FormType<
            infer FieldDefs,
            infer ExtraProps,
            infer ExtraOverrides
          >
        ? FormHandler<
            FieldDefs,
            object,
            ExtraOverrides & FormDialogFieldOverrides
          >
        : never

export type ZodHandler<
  FieldDefs,
  ExtraProps = object,
  ExtraOverrides = object,
  Type extends 'zod' = 'zod',
> = <
  TSchema extends z.AnyZodObject = z.AnyZodObject,
  TFieldValues extends z.infer<TSchema> = z.infer<TSchema>,
  TContext extends object = object,
>(
  props: WithFields<
    FormProps<TSchema, TFieldValues, TContext>,
    FieldDefs,
    ExtraOverrides
  > & {
    ref?: React.ForwardedRef<HTMLFormElement>
  } & ExtraProps,
) => ModalId

export type FormHandler<
  FieldDefs,
  ExtraProps = object,
  ExtraOverrides = object,
> = <
  TSchema = unknown,
  TFieldValues extends FieldValues = FieldValues,
  TContext extends object = object,
>(
  props: WithFields<
    FormProps<TSchema, TFieldValues, TContext>,
    FieldDefs,
    ExtraOverrides
  > & {
    ref?: React.ForwardedRef<HTMLFormElement>
  } & ExtraProps,
) => ModalId

export type YupHandler<
  FieldDefs,
  ExtraProps = object,
  ExtraOverrides = object,
  Type extends 'yup' = 'yup',
> = <
  TSchema extends AnyObjectSchema = AnyObjectSchema,
  TFieldValues extends InferType<TSchema> = InferType<TSchema>, // placeholder
  TContext extends object = object,
>(
  props: WithFields<
    FormProps<TFieldValues, TContext, TSchema>,
    FieldDefs,
    ExtraOverrides
  > & {
    ref?: React.ForwardedRef<HTMLFormElement>
  } & ExtraProps,
) => ModalId
