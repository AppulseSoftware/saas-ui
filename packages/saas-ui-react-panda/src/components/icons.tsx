import { ComponentProps } from 'react'

import { styled } from '@saas-ui/panda/jsx'

import { createIcon } from './create-icon'

interface SvgProps extends ComponentProps<typeof styled.svg> {}

export const CloseIcon = (props: SvgProps) => (
  <styled.svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M18.7071 6.70711C19.0976 6.31658 19.0976 5.68342 18.7071 5.29289C18.3166 4.90237 17.6834 4.90237 17.2929 5.29289L12 10.5858L6.70711 5.29289C6.31658 4.90237 5.68342 4.90237 5.29289 5.29289C4.90237 5.68342 4.90237 6.31658 5.29289 6.70711L10.5858 12L5.29289 17.2929C4.90237 17.6834 4.90237 18.3166 5.29289 18.7071C5.68342 19.0976 6.31658 19.0976 6.70711 18.7071L12 13.4142L17.2929 18.7071C17.6834 19.0976 18.3166 19.0976 18.7071 18.7071C19.0976 18.3166 19.0976 17.6834 18.7071 17.2929L13.4142 12L18.7071 6.70711Z"
    />
  </styled.svg>
)

export const CheckIcon = createIcon({
  path: (
    <g>
      <polyline points="20 6 9 17 4 12"></polyline>
    </g>
  ),
})

export const ChevronRightIcon = createIcon({
  path: <polyline points="9 18 15 12 9 6"></polyline>,
})
