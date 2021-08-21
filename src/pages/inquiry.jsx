import Head from "next/head";
import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

import { Footer } from "../components/footer";
import { Header } from "../components/header";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';


const Inquiry = () => {
  return <>
    <Head>
      <title>入力フォーム</title>
    </Head>
    <div className="h-screen sm:bg-green-100">
      <Header />
      <div className="text-4xl">入力フォーム</div>
      <div className="text-2xl">※注意点※
        <li className="text-red-400">必須項目は必ず入力してください</li>
        <li className="text-red-400">入力後、確認ボタンをクリックしてください</li>
      </div>

      {/* コピペした内容 */}
      <div>
        <Formik
          initialValues={{
            inquiryType: '',
            service: [],
            company: '',
            name: '',
            email: '',
            address: '',
            content: '',
          }}
          // validationSchema={Yup.object({
          //   inquiryType: Yup.string()
          //     .required('お問い合わせ種別を選択してください'),
          //   service: Yup.array()
          //     .min(1, '検討中のサービスを1つ以上選択してください'),
          //   name: Yup.string()
          //     .required('ご担当者名は必須です'),
          //   company: Yup.string()
          //     .required('御社名は必須です'),
          //   email: Yup.string()
          //     .email('メールアドレスの形式に誤りがあります')
          //     .required('メールアドレスは必須です'),
          //   content: Yup.string()
          //     .required('お問い合わせ内容は必須です'),
          // })}
          onSubmit={(values, { setSubmitting, resetForm }) => {
            // 実際にはここにデータ送信処理など
            alert(JSON.stringify(values, null, 2))
            setSubmitting(false)
            resetForm()
          }}
        >
          {({ isSubmitting, isValid, errors }) =>
            <Form>
              {!isValid && (
                <Head>
                  <title>{Object.keys(errors).length}箇所の入力エラーがあります - {title}</title>
                </Head>
              )}
              <div>
                <fieldset aria-required="true" aria-invalid={errors.inquiryType ? 'true' : 'false'}>
                  <legend id="labelInquiryType">
                    お問い合わせ種別
                    <span>必須</span>
                    <ErrorMessage name="inquiryType">
                      {msg => <span aria-live="polite"><FontAwesomeIcon icon={faExclamationTriangle} />{msg}</span>}
                    </ErrorMessage>
                  </legend>
                  <div>
                    <ul role="radiogroup" aria-labelledby="labelInquiryType">
                      <li><Field name="inquiryType" id="inquiryType01" type="radio" value="見積もり依頼" /><label htmlFor="inquiryType01">見積もり依頼</label></li>
                      <li><Field name="inquiryType" id="inquiryType02" type="radio" value="採用に関するお問い合わせ" /><label htmlFor="inquiryType02">試用版申込み</label></li>
                      <li><Field name="inquiryType" id="inquiryType03" type="radio" value="その他" /><label htmlFor="inquiryType03">その他</label></li>
                    </ul>
                  </div>
                </fieldset>
              </div>
              <div>
                <fieldset aria-required="true" aria-invalid={errors.service ? 'true' : 'false'}>
                  <legend id="labeService">
                    検討中のサービス
                    <span>必須</span>
                    <ErrorMessage name="service">
                      {msg => <span aria-live="polite"><FontAwesomeIcon icon={faExclamationTriangle} />{msg}</span>}
                    </ErrorMessage>
                  </legend>
                  <div>
                    <ul role="group" aria-labelledby="labeService">
                      <li><Field name="service" id="service01" type="checkbox" value="サービスA" /><label htmlFor="service01">サービスA</label></li>
                      <li><Field name="service" id="service02" type="checkbox" value="サービスB" /><label htmlFor="service02">サービスB</label></li>
                      <li><Field name="service" id="service03" type="checkbox" value="サービスC" /><label htmlFor="service03">サービスC</label></li>
                    </ul>
                  </div>
                </fieldset>
              </div>
              <div>
                <div>
                  <label htmlFor="company">
                    御社名
                    <span>必須</span>
                    <ErrorMessage name="company">
                      {msg => <span aria-live="polite"><FontAwesomeIcon icon={faExclamationTriangle} />{msg}</span>}
                    </ErrorMessage>
                  </label>
                </div>
                <div>
                  <Field
                    name="company"
                    id="company"
                    type="text"
                    placeholder="会社名や団体名をご記入ください"
                    aria-required="true"
                    aria-invalid={errors.company ? 'true' : 'false'}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="name">
                    ご担当者名
                    <span>必須</span>
                    <ErrorMessage name="name">
                      {msg => <span aria-live="polite"><FontAwesomeIcon icon={faExclamationTriangle} />{msg}</span>}
                    </ErrorMessage>
                  </label>
                </div>
                <div>
                  <Field
                    name="name"
                    id="name"
                    type="text"
                    placeholder="ご担当者様のお名前をご記入ください"
                    aria-required="true"
                    aria-invalid={errors.name ? 'true' : 'false'}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="email">
                    メールアドレス
                    <span>必須</span>
                    <ErrorMessage name="email">
                      {msg => <span aria-live="polite"><FontAwesomeIcon icon={faExclamationTriangle} />{msg}</span>}
                    </ErrorMessage>
                  </label>
                </div>
                <div>
                  <Field
                    name="email"
                    id="email"
                    type="email"
                    placeholder="メールアドレスを正しくご記入ください"
                    aria-required="true"
                    aria-invalid={errors.email ? 'true' : 'false'}
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="address">会社住所</label>
                </div>
                <div>
                  <Field
                    name="address"
                    id="address"
                    component="textarea"
                    placeholder="住所をご記入ください"
                  />
                </div>
              </div>
              <div>
                <div>
                  <label htmlFor="content">
                    お問い合わせ内容
                    <span>必須</span>
                    <ErrorMessage name="content">
                      {msg => <span aria-live="polite"><FontAwesomeIcon icon={faExclamationTriangle} />{msg}</span>}
                    </ErrorMessage>
                  </label>
                </div>
                <div>
                  <Field
                    name="content"
                    id="content"
                    component="textarea"
                    placeholder="お問い合わせ内容をご記入ください"
                    aria-required="true"
                    aria-invalid={errors.content ? 'true' : 'false'}
                  />
                </div>
              </div>
              <div>
                <button
                  disabled={isSubmitting}
                  type="submit"
                  id="submit"
                  title="入力内容を送信します">
                  入力内容の送信
                </button>
              </div>
            </Form>
          }
        </Formik>
      </div>
    </div>


    <Footer />
  </>
};

export default Inquiry;
