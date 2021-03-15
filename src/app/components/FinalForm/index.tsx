/**
 *
 * FinalForm
 *
 */
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Card, Form, Input } from 'antd';
import { translations } from 'locales/i18n';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { StyledFinalForm } from './styles';

interface Props {
  className?: string;
}

export const FinalForm = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const validateMessages = {
    required: `\${label} ${t(translations.global.validation.required)}`,
    types: {
      string: `\${label} ${t(translations.global.validation.types.string)}`,
      number: `\${label} ${t(translations.global.validation.types.string)}`,
      password: `\${label} ${t(translations.global.validation.types.password)}`,
    },
    number: {
      range: `\${label} ${t(translations.global.validation.number.range)}`,
    },
  };
  return (
    <StyledFinalForm className={`FinalForm ${className || ''}`}>
      <Card
        title={t(translations.global.titleForm.finalform)}
        className="card-form"
      >
        <Form className="login-form" validateMessages={validateMessages}>
          <Form.Item name="firstName" rules={[{ required: true }]}>
            <Input
              prefix={<UserOutlined style={{ fontSize: 13 }} />}
              type="text"
              placeholder={t(translations.global.placeholder.firstName)}
            />
          </Form.Item>
          <Form.Item name="lastName" rules={[{ required: true }]}>
            <Input
              prefix={<UserOutlined style={{ fontSize: 13 }} />}
              placeholder={t(translations.global.placeholder.lastName)}
            />
          </Form.Item>
          <Form.Item
            name="fatherName"
            rules={[{ required: true, min: 10, max: 10 }]}
          >
            <Input
              prefix={<UserOutlined style={{ fontSize: 13 }} />}
              placeholder={t(translations.global.placeholder.fatherName)}
            />
          </Form.Item>
          <Form.Item name="shSh" rules={[{ required: true }]}>
            <Input
              prefix={<UserOutlined style={{ fontSize: 13 }} />}
              placeholder={t(translations.global.placeholder.shSh)}
            />
          </Form.Item>
          <Form.Item
            name="nationalCode"
            rules={[{ required: true, min: 6, max: 20 }]}
          >
            <Input
              prefix={<LockOutlined style={{ fontSize: 13 }} />}
              placeholder={t(translations.global.placeholder.nationalCode)}
            />
          </Form.Item>
          <Form.Item name="mobile" rules={[{ required: true }]}>
            <Input
              prefix={<UserOutlined style={{ fontSize: 13 }} />}
              placeholder={t(translations.global.placeholder.mobile)}
            />
          </Form.Item>
          <Form.Item name="phone" rules={[{ required: true }]}>
            <Input
              prefix={<UserOutlined style={{ fontSize: 13 }} />}
              placeholder={t(translations.global.placeholder.phone)}
            />
          </Form.Item>
          <Form.Item name="address" rules={[{ required: true }]}>
            <Input
              prefix={<UserOutlined style={{ fontSize: 13 }} />}
              placeholder={t(translations.global.placeholder.address)}
            />
          </Form.Item>
          <Form.Item name="postCode" rules={[{ required: true }]}>
            <Input
              prefix={<UserOutlined style={{ fontSize: 13 }} />}
              placeholder={t(translations.global.placeholder.postCode)}
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="btn btn-secondary"
              block
            >
              Log in
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </StyledFinalForm>
  );
});
