/**
 *
 * UserProfileForm
 *
 */
import {
  UserOutlined,
  FieldBinaryOutlined,
  MobileOutlined,
  HomeOutlined,
  InboxOutlined,
} from '@ant-design/icons';
import { Form, Input } from 'antd';
import { translations } from 'locales/i18n';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
  className?: string;
}

export const UserProfileForm = memo(({ className }: Props) => {
  const { t } = useTranslation();

  return (
    <>
      <Form.Item name="first_name" rules={[{ required: true }]}>
        <Input
          prefix={<UserOutlined style={{ fontSize: 13 }} />}
          type="text"
          placeholder={t(translations.global.placeholder.firstName)}
        />
      </Form.Item>
      <Form.Item name="last_name" rules={[{ required: true }]}>
        <Input
          prefix={<UserOutlined style={{ fontSize: 13 }} />}
          placeholder={t(translations.global.placeholder.lastName)}
        />
      </Form.Item>
      <Form.Item name="father_name" rules={[{ required: true }]}>
        <Input
          prefix={<UserOutlined style={{ fontSize: 13 }} />}
          placeholder={t(translations.global.placeholder.fatherName)}
        />
      </Form.Item>
      <Form.Item name="sh_sh" rules={[{ required: true }]}>
        <Input
          prefix={<FieldBinaryOutlined style={{ fontSize: 13 }} />}
          placeholder={t(translations.global.placeholder.shSh)}
        />
      </Form.Item>
      <Form.Item
        name="national_code"
        rules={[{ required: true, min: 10, max: 10 }]}
      >
        <Input
          prefix={<FieldBinaryOutlined style={{ fontSize: 13 }} />}
          placeholder={t(translations.global.placeholder.nationalCode)}
        />
      </Form.Item>
      <Form.Item name="tel" rules={[{ required: true }]}>
        <Input
          prefix={<MobileOutlined style={{ fontSize: 13 }} />}
          placeholder={t(translations.global.placeholder.mobile)}
        />
      </Form.Item>
      <Form.Item name="address" rules={[{ required: true }]}>
        <Input
          prefix={<HomeOutlined style={{ fontSize: 13 }} />}
          placeholder={t(translations.global.placeholder.address)}
        />
      </Form.Item>
      <Form.Item name="post_code" rules={[{ required: true }]}>
        <Input
          prefix={<InboxOutlined style={{ fontSize: 13 }} />}
          placeholder={t(translations.global.placeholder.postCode)}
        />
      </Form.Item>
    </>
  );
});
