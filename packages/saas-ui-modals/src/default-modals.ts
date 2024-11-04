import { ConfirmDialog } from './dialog'
import { Drawer } from './drawer'
import { Modal } from './modal'

export const defaultModals = {
  alert: ConfirmDialog,
  confirm: ConfirmDialog,
  drawer: Drawer,
  modal: Modal,
}
