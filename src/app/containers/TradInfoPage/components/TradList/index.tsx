/**
 *
 * TradList
 *
 */
import { Button, Card, Descriptions, Form, Row, Select } from 'antd';
import {
  selectAddAgent,
  selectAuthData,
  selectBrowseAgentList,
} from 'app/containers/App/selectors';
import { appActions } from 'app/containers/App/slice';
import { translations } from 'locales/i18n';
import React, { memo, useCallback, useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { UserBalance } from 'types';
import { Storage } from 'utils/storage';

import { StyledTradList } from './styles';

interface Props {
  className?: string;
}

export const TradList = memo(({ className }: Props) => {
  const { t } = useTranslation();
  const dispatch = useDispatch();
  const [selectAgent, setSelectAgent] = useState(0);
  const agentData = useSelector(selectBrowseAgentList);
  const addAgentData = useSelector(selectAddAgent);
  const authData = useSelector(selectAuthData);
  // let authData = Storage.read('auth');
  const currency =
    authData &&
    authData.user &&
    authData.user.balances &&
    authData.user.balances.find(b => b.currency_name === 'ardbit');

  const handleChangeAgent = useCallback(value => {
    setSelectAgent(value);
  }, []);

  const handleAddAgent = useCallback(
    value => {
      if (authData && currency) {
        dispatch(
          appActions.addAgent({
            user_id: authData.user.id,
            currency_id: currency.currency_id,
            type: currency.type,
            agent_id: selectAgent,
          }),
        );
      }
    },
    [authData, currency, dispatch, selectAgent],
  );

  useEffect(() => {
    dispatch(appActions.browseAgentList({}));
  }, [dispatch]);

  return (
    <StyledTradList className={`TradList ${className || ''}`}>
      <Card hoverable>
        {currency ? (
          <>
            <Row justify="space-around" align="middle" gutter={[8, 8]}>
              <Descriptions
                title={t(translations.pages.TradInfoPage.balanceList.title)}
              >
                <Descriptions.Item
                  className="descriptionsItem"
                  label={t(
                    translations.pages.TradInfoPage.balanceList.currencyType,
                  )}
                >
                  {currency.type}
                </Descriptions.Item>

                <Descriptions.Item
                  className="descriptionsItem"
                  label={t(translations.pages.TradInfoPage.balanceList.balance)}
                >
                  {currency.balance
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Descriptions.Item>

                {/* <Descriptions.Item
                  className="descriptionsItem"
                  label={t(
                    translations.pages.TradInfoPage.balanceList.rateInRial,
                  )}
                >
                  {currency.rate_in_rial
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Descriptions.Item>

                <Descriptions.Item
                  className="descriptionsItem"
                  label={t(
                    translations.pages.TradInfoPage.balanceList.totalRateInRial,
                  )}
                >
                  {currency.total_rate_in_rial
                    .toString()
                    .replace(/\B(?=(\d{3})+(?!\d))/g, ',')}
                </Descriptions.Item> */}
              </Descriptions>
            </Row>

            <Row>
              {currency.agent_id === 1 ? (
                <Form
                  name="customized_form_controls"
                  layout="inline"
                  onFinish={handleAddAgent}
                >
                  <Form.Item
                    name="agent"
                    label={t(translations.pages.TradInfoPage.balanceList.agent)}
                    initialValue={agentData}
                  >
                    <span>
                      <Select
                        defaultValue={t(
                          translations.pages.TradInfoPage.balanceList
                            .defaultValue,
                        )}
                        style={{ width: 180, margin: '0 8px' }}
                        onChange={handleChangeAgent}
                      >
                        {agentData.data &&
                          Object.keys(agentData.data).map((item, i) => (
                            <Select.Option key={i} value={item}>
                              {agentData.data![i + 1]}
                            </Select.Option>
                          ))}
                      </Select>
                    </span>
                  </Form.Item>
                  <Form.Item>
                    <Button className="btn btn-secondary" htmlType="submit">
                      {t(translations.pages.TradInfoPage.balanceList.submit)}
                    </Button>
                  </Form.Item>
                </Form>
              ) : (
                <Form.Item
                  label={t(translations.pages.TradInfoPage.balanceList.agent)}
                >
                  {currency.agent_name}
                </Form.Item>
              )}
            </Row>
          </>
        ) : (
          <Row justify="space-around" align="middle" gutter={[16, 16]}>
            {t(translations.pages.TradInfoPage.empty)}
          </Row>
        )}
      </Card>
    </StyledTradList>
  );
});
