import React from 'react'
import { Modal } from '@sunswap/sunswap-finance-uikit'
import SlippageToleranceSetting from './SlippageToleranceSetting'
import TransactionDeadlineSetting from './TransactionDeadlineSetting'

type SettingsModalProps = {
  onDismiss?: () => void
}

// TODO: Fix UI Kit typings
const defaultOnDismiss = () => null

const SettingsModal = ({ onDismiss = defaultOnDismiss }: SettingsModalProps) => (
    <Modal title="Settings" onDismiss={onDismiss}>
      <SlippageToleranceSetting />
      <TransactionDeadlineSetting />
    </Modal>
  )

export default SettingsModal
