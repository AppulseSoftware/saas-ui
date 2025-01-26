/* eslint-disable */
import type { ConditionalValue } from '../types/index';
import type { DistributiveOmit, Pretty } from '../types/system-types';

interface ListVariant {
  /**
 * @default "marker"
 */
variant: "marker" | "plain"
align: "center" | "start" | "end"
}

type ListVariantMap = {
  [key in keyof ListVariant]: Array<ListVariant[key]>
}

export type ListVariantProps = {
  [key in keyof ListVariant]?: ConditionalValue<ListVariant[key]> | undefined
}

export interface ListRecipe {
  __type: ListVariantProps
  (props?: ListVariantProps): Pretty<Record<"root" | "item" | "indicator", string>>
  raw: (props?: ListVariantProps) => ListVariantProps
  variantMap: ListVariantMap
  variantKeys: Array<keyof ListVariant>
  splitVariantProps<Props extends ListVariantProps>(props: Props): [ListVariantProps, Pretty<DistributiveOmit<Props, keyof ListVariantProps>>]
  getVariantProps: (props?: ListVariantProps) => ListVariantProps
}


export declare const list: ListRecipe