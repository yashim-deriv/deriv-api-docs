import React from 'react';
import { useAppManagerContext } from '@site/src/hooks/useAppManagerContext';
import { TModalActionButton } from '@deriv/ui/dist/types/src/components/core/modal/types';
import { Modal } from '@deriv/ui';

type TDeleteAppDialog = {
  deleteApp: () => void;
};

export default function DeleteAppDialog({ deleteApp }: TDeleteAppDialog) {
  const { dialog_state, setDialogState } = useAppManagerContext();
  const dialog_is_open = dialog_state === 'DIALOG_DELETE';

  const actionButtons: TModalActionButton[] = [
    {
      id: 1,
      text: 'Yes, delete',
      color: 'primary',
      onClick: () => {
        deleteApp();
        setDialogState('');
      },
    },
    {
      id: 1,
      text: 'No, keep it',
      color: 'secondary',
      onClick: () => {
        setDialogState('');
      },
    },
  ];

  return (
    <Modal open={dialog_is_open} onOpenChange={() => setDialogState('')}>
      <Modal.Portal>
        <Modal.Overlay />
        <Modal.DialogContent
          title='Delete app'
          content='Are you sure you want to delete this app?'
          action_buttons={actionButtons}
          has_close_button
        />
      </Modal.Portal>
    </Modal>
  );
}
