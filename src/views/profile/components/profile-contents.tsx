import { MainInput } from '@/components';
import { CustomForm } from '@/components/form';
import { useAppSelector } from '@/hooks';
import { IPageParams } from '@/types';
import { EditDocumentIcon } from '@/views/profile/components/edit-icon-component';

import toast from 'react-hot-toast';

import {
  Avatar,
  Button,
  Modal,
  ModalBody,
  ModalContent,
  ModalHeader,
  useDisclosure,
} from '@nextui-org/react';
import { FastField } from 'formik';
import { get } from 'lodash';

interface IProfileContents extends IPageParams {}
const ProfileContents = ({ lang }: IProfileContents) => {
  const { data, isAuthenticated } = useAppSelector((state) => state.user);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <div>
      <Modal
        backdrop="blur"
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Foydalanuvchi ma'lumotlarini tahrirlash</ModalHeader>
              <ModalBody>
                <CustomForm
                  method={'put'}
                  url={`users/1`}
                  onSuccess={() => {
                    toast.success('User information updated successfully');
                  }}
                  onError={() => toast.error('User information updated failed')}
                  fields={[
                    {
                      name: 'fullName',
                      value: get(data, 'fullName'),
                      onSubmitValue: (value) => value.trimStart(),
                    },
                    {
                      name: 'address',
                      value: get(data, 'address'),
                      onSubmitValue: (value) =>value.trimStart(),
                    },
                  ]}
                >
                  {({ isSubmitting }) => {
                    return (
                      <div className="modal__form">
                        <div>
                          <FastField
                            name="fullName"
                            component={MainInput}
                            label="To'liq ism sharifingiz"
                            placeholder="To'liq ism sharifingizni kiriting"
                          />
                        </div>
                        <div className="mt-6">
                          <FastField
                            name="address"
                            component={MainInput}
                            label="Yashash manzilingiz"
                            placeholder="Yashash manzilingizni kiriting"
                          />
                        </div>
                        {isSubmitting}
                        <div className="text-end mt-6">
                          <Button
                            type="submit"
                            color='primary'
                            isLoading={isSubmitting}
                            disabled={isSubmitting}
                          >
                            O'zgarishni saqlash
                          </Button>
                        </div>
                      </div>
                    );
                  }}
                </CustomForm>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </div>
  );
};
export default ProfileContents;
