/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface SwittchVariant {
  /**
 * @default "solid"
 */
variant: "solid" | "raised"
/**
 * @default "md"
 */
size: "xs" | "sm" | "md" | "lg"
}

type SwittchVariantMap = {
  [key in keyof SwittchVariant]: Array<SwittchVariant[key]>
}

export type SwittchVariantProps = {
  [key in keyof SwittchVariant]?: ConditionalValue<SwittchVariant[key]> | undefined
}

export interface SwittchRecipe {
  __type: SwittchVariantProps
  (props?: SwittchVariantProps): Pretty<Record<"root" | "label" | "control" | "thumb" | "indicator", string>>
  raw: (props?: SwittchVariantProps) => SwittchVariantProps
  variantMap: SwittchVariantMap
  variantKeys: Array<keyof SwittchVariant>
  splitVariantProps<Props extends SwittchVariantProps>(props: Props): [SwittchVariantProps, Pretty<DistributiveOmit<Props, keyof SwittchVariantProps>>]
  getVariantProps: (props?: SwittchVariantProps) => SwittchVariantProps
}


export declare const swittch: SwittchRecipe