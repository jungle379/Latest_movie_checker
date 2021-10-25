import Head from "next/head";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../../components/header";
import { Footer } from "../../components/footer";

const Inquiry = () => {
  return (
    <>
      <Head>
        <title>お問合せフォーム</title>
      </Head>
      <div className="sm:h-full sm:bg-green-100 bg-green-300">
        <Header />
        <div className="sm:text-4xl mt-10 sm:ml-40 text-pink-400">
          お問合せフォーム
        </div>
        <div className="justify-around mt-10 mb-10 mr-40 h-40 sm:border-dashed sm:border-8 sm:border-red-400 sm:mr-80 sm:ml-40 sm:bg-gray-200">
          <div className=" mt-5 sm:ml-40 mb-5 text-red-500 sm:text-2xl">
            ※注意点※
            <li className="text-red-400">必須項目は必ず入力してください</li>
            <li className="text-red-400">
              入力後は「入力内容の送信」ボタンをクリックしてください
            </li>
          </div>
        </div>
        <div className="sm:pl-96 sm:text-2xl">
          <Formik
            initialValues={{
              inquiryType: "",
              service: [],
              company: "",
              name: "",
              email: "",
              address: "",
              content: "",
            }}
            validationSchema={Yup.object({
              inquiryType:
                Yup.string().required("お問い合わせ種別を選択してください"),
              service: Yup.array().min(1, "お問い合わせ内容を選択してください"),
              name: Yup.string().required("氏名は必須です"),
              company: Yup.string().required("職業は必須です"),
              email: Yup.string()
                .email("メールアドレスの形式に誤りがあります")
                .required("メールアドレスは必須です"),
              content: Yup.string().required("お問い合わせ内容は必須です"),
            })}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              // 実際にはここにデータ送信処理など
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
              resetForm();
            }}
          >
            {({ isSubmitting, isValid, errors }) => (
              <Form>
                {!isValid && (
                  <Head>
                    <title>
                      {Object.keys(errors).length}箇所の入力エラーがあります
                    </title>
                  </Head>
                )}
                <div>
                  <fieldset
                    aria-required="true"
                    aria-invalid={errors.inquiryType ? "true" : "false"}
                  >
                    <legend id="labelInquiryType">
                      お問い合わせ種別
                      <span className="text-red-600 pl-5">必須</span>
                      <ErrorMessage name="inquiryType">
                        {(msg) => (
                          <span aria-live="polite">
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            {msg}
                          </span>
                        )}
                      </ErrorMessage>
                    </legend>
                    <div>
                      <ul role="radiogroup" aria-labelledby="labelInquiryType">
                        <li>
                          <Field
                            name="inquiryType"
                            id="inquiryType01"
                            type="radio"
                            value="当サイトに関する問い合わせ"
                          />
                          <label htmlFor="inquiryType01">
                            当サイトに関するお問い合わせ
                          </label>
                        </li>
                        <li>
                          <Field
                            name="inquiryType"
                            id="inquiryType02"
                            type="radio"
                            value="サイト管理者へのお問い合わせ"
                          />
                          <label htmlFor="inquiryType02">
                            サイト管理者へのお問い合わせ
                          </label>
                        </li>
                        <li>
                          <Field
                            name="inquiryType"
                            id="inquiryType03"
                            type="radio"
                            value="その他"
                          />
                          <label htmlFor="inquiryType03">その他</label>
                        </li>
                      </ul>
                    </div>
                  </fieldset>
                </div>
                <div className="mt-5">
                  <fieldset
                    aria-required="true"
                    aria-invalid={errors.service ? "true" : "false"}
                  >
                    <legend id="labeService">
                      お問い合わせ内容
                      <span className="text-red-600 pl-5">必須</span>
                      <ErrorMessage name="service">
                        {(msg) => (
                          <span aria-live="polite">
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            {msg}
                          </span>
                        )}
                      </ErrorMessage>
                    </legend>
                    <div>
                      <ul role="group" aria-labelledby="labeService">
                        <li>
                          <Field
                            name="service"
                            id="service01"
                            type="checkbox"
                            value="映画情報"
                          />
                          <label htmlFor="service01">映画情報</label>
                        </li>
                        <li>
                          <Field
                            name="service"
                            id="service02"
                            type="checkbox"
                            value="サイトの不具合"
                          />
                          <label htmlFor="service02">サイトの不具合</label>
                        </li>
                        <li>
                          <Field
                            name="service"
                            id="service03"
                            type="checkbox"
                            value="その他ご要望"
                          />
                          <label htmlFor="service03">その他ご要望</label>
                        </li>
                      </ul>
                    </div>
                  </fieldset>
                </div>
                <div>
                  <div className="mt-5">
                    <label htmlFor="company">
                      職業
                      <span className="text-red-600 pl-5">必須</span>
                      <ErrorMessage name="company">
                        {(msg) => (
                          <span aria-live="polite">
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            {msg}
                          </span>
                        )}
                      </ErrorMessage>
                    </label>
                  </div>
                  <div>
                    <Field
                      className="w-72"
                      component="select"
                      name="company"
                      id="company"
                      // type="text"
                      placeholder="職業をご記入ください"
                      aria-required="true"
                      aria-invalid={errors.company ? "true" : "false"}
                    >
                      <option value="none">職業をお選びください</option>
                      <option value="student">学生</option>
                      <option value="SM">会社員</option>
                      <option value="SW">公務員</option>
                      <option value="PA">パート・アルバイト</option>
                      <option value="OTHER">その他</option>
                    </Field>
                  </div>
                </div>
                <div>
                  <div className="mt-5">
                    <label htmlFor="name">
                      氏名
                      <span className="text-red-600 pl-5">必須</span>
                      <ErrorMessage name="name">
                        {(msg) => (
                          <span aria-live="polite">
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            {msg}
                          </span>
                        )}
                      </ErrorMessage>
                    </label>
                  </div>
                  <div>
                    <Field
                      className="w-72"
                      name="name"
                      id="name"
                      type="text"
                      placeholder="お名前をご記入ください"
                      aria-required="true"
                      aria-invalid={errors.name ? "true" : "false"}
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-5">
                    <label htmlFor="email">
                      メールアドレス
                      <span className="text-red-600 pl-5">必須</span>
                      <ErrorMessage name="email">
                        {(msg) => (
                          <span aria-live="polite">
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            {msg}
                          </span>
                        )}
                      </ErrorMessage>
                    </label>
                  </div>
                  <div>
                    <Field
                      className="w-3/5 text-0.5xl"
                      name="email"
                      id="email"
                      type="email"
                      placeholder="メールアドレスを正しくご記入ください"
                      aria-required="true"
                      aria-invalid={errors.email ? "true" : "false"}
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="address">お住まい(都道府県から)</label>
                  </div>
                  <div>
                    <Field
                      className="w-96"
                      name="address"
                      id="address"
                      component="textarea"
                      placeholder="住所をご記入ください"
                    />
                  </div>
                </div>
                <div>
                  <div className="mt-5">
                    <label htmlFor="content">
                      お問い合わせ内容
                      <span className="text-red-600 pl-5">必須</span>
                      <ErrorMessage name="content">
                        {(msg) => (
                          <span aria-live="polite">
                            <FontAwesomeIcon icon={faExclamationTriangle} />
                            {msg}
                          </span>
                        )}
                      </ErrorMessage>
                    </label>
                  </div>
                  <div>
                    <Field
                      className="h-36 w-3/5"
                      name="content"
                      id="content"
                      component="textarea"
                      placeholder="お問い合わせ内容をご記入ください"
                      aria-required="true"
                      aria-invalid={errors.content ? "true" : "false"}
                    />
                  </div>
                </div>
                <div className="sm:pl-64 pl-20">
                  <button
                    className="text-2xl mt-10 border-gray-500 border-2 bg-gray-300 hover:bg-pink-200 hover:opacity-75"
                    disabled={isSubmitting}
                    type="submit"
                    id="submit"
                    title="入力内容を送信します"
                  >
                    入力内容の送信
                  </button>
                </div>
              </Form>
            )}
          </Formik>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Inquiry;
