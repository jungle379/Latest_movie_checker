# Latest_Movie_Checker

## 作成しようとした理由
- 映画館でアルバイトをしていた時にお客様から上映していない映画について尋ねられたことがあり、  
その際にメジャーではない映画についてどこで上映しているか回答に困った経験があった。   
メジャー・マイナー問わず一括でまとめられているサイトがあれば、お客様もわざわざ足を運ぶ必要がないと思い制作しました。

## 概要
- 公開順に作品及び上映劇場がまとめられているサイトを作成し、ページを開いただけで. 
人気作品やニッチな作品がどこで観られるかわかるようなサイトを作成する。
 
## 機能
- 今週末公開作品一覧
　週末に公開される映画をまとめたページ。  
 リンクをクリックすると公式HPへ飛ぶように設計
 
- 当月公開予定作品一覧
　アーカイブ形式で設計し、今月公開予定の作品一覧を掲載。  
 mdファイルにて作品詳細ページを作成している。
 
- 近隣の映画館の検索ページ
　Google mapのAPI取得により、現在地から直近の映画館を検索できるようにしてあるページ
 

## GithubのURL
- https://github.com/jungle379/Latest_movie_chacker

## デプロイ先URL
- https://vercel.com/jungle379/latest-movie-checker

## サイトイメージ
 -トップページ
<img src="/public/images/src1.jpg">

 -アーカイブページ
<img src="/public/images/src2.jpg">


import Head from "next/head";
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import Header from "../components/header";
import Footer from "../components/footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';

//先ず下記ライブラリを使用する
//npm install formik Yup --save
//ここまで

const Inquiry = () => {
return <>
<Head>
<title>入力フォーム</title>
</Head>
//bgカラー
<Header />
<div className="text-4xl">入力フォーム</div>
<div className="text-2xl">※注意点※
<li className="text-red-400">必須項目は必ず入力してください</li>
<li className="text-red-400">入力後、確認ボタンをクリックしてください</li>
</div>

//コピペした内容
 <div className={styles.formArea}>
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
                    validationSchema={Yup.object({
                        inquiryType: Yup.string()
                            .required('お問い合わせ種別を選択してください'),
                        service: Yup.array()
                            .min(1, '検討中のサービスを1つ以上選択してください'),
                        name: Yup.string()
                            .required('ご担当者名は必須です'),
                        company: Yup.string()
                            .required('御社名は必須です'),
                        email: Yup.string()
                            .email('メールアドレスの形式に誤りがあります')
                            .required('メールアドレスは必須です'),
                        content: Yup.string()
                            .required('お問い合わせ内容は必須です'),
                    })}
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
                            <div className={styles.formField}>
                                <fieldset aria-required="true" aria-invalid={errors.inquiryType ? 'true' : 'false'}>
                                    <legend className={styles.formFieldName} id="labelInquiryType">
                                        お問い合わせ種別
                                        <span className={styles.formInputRequisite}>必須</span>
                                        <ErrorMessage name="inquiryType">
                                            {msg => <span className={styles.invalidForm} aria-live="polite"><FontAwesomeIcon icon={faExclamationTriangle} />{msg}</span>}
                                        </ErrorMessage>
                                    </legend>
                                    <div className={styles.formFieldInput}>
                                        <ul role="radiogroup" aria-labelledby="labelInquiryType">
                                            <li><Field name="inquiryType" id="inquiryType01" type="radio" value="見積もり依頼" /><label htmlFor="inquiryType01">見積もり依頼</label></li>
                                            <li><Field name="inquiryType" id="inquiryType02" type="radio" value="採用に関するお問い合わせ" /><label htmlFor="inquiryType02">試用版申込み</label></li>
                                            <li><Field name="inquiryType" id="inquiryType03" type="radio" value="その他" /><label htmlFor="inquiryType03">その他</label></li>
                                        </ul>
                                    </div>
                                </fieldset>
                            </div>
                            <div className={styles.formField}>
                                <fieldset aria-required="true" aria-invalid={errors.service ? 'true' : 'false'}>
                                    <legend className={styles.formFieldName} id="labeService">
                                        検討中のサービス
                                        <span className={styles.formInputRequisite}>必須</span>
                                        <ErrorMessage name="service">
                                            {msg => <span className={styles.invalidForm} aria-live="polite"><FontAwesomeIcon icon={faExclamationTriangle} />{msg}</span>}
                                        </ErrorMessage>
                                    </legend>
                                    <div className={styles.formFieldInput}>
                                        <ul role="group" aria-labelledby="labeService">
                                            <li><Field name="service" id="service01" type="checkbox" value="サービスA" /><label htmlFor="service01">サービスA</label></li>
                                            <li><Field name="service" id="service02" type="checkbox" value="サービスB" /><label htmlFor="service02">サービスB</label></li>
                                            <li><Field name="service" id="service03" type="checkbox" value="サービスC" /><label htmlFor="service03">サービスC</label></li>
                                        </ul>
                                    </div>
                                </fieldset>
                            </div>
                            <div className={styles.formField}>
                                <div className={styles.formFieldName}>
                                    <label htmlFor="company">
                                        御社名
                                        <span className={styles.formInputRequisite}>必須</span>
                                        <ErrorMessage name="company">
                                            {msg => <span className={styles.invalidForm} aria-live="polite"><FontAwesomeIcon icon={faExclamationTriangle} />{msg}</span>}
                                        </ErrorMessage>
                                    </label>
                                </div>
                                <div className={styles.formFieldInput}>
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
                            <div className={styles.formField}>
                                <div className={styles.formFieldName}>
                                    <label htmlFor="name">
                                        ご担当者名
                                        <span className={styles.formInputRequisite}>必須</span>
                                        <ErrorMessage name="name">
                                            {msg => <span className={styles.invalidForm} aria-live="polite"><FontAwesomeIcon icon={faExclamationTriangle} />{msg}</span>}
                                        </ErrorMessage>
                                    </label>
                                </div>
                                <div className={styles.formFieldInput}>
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
                            <div className={styles.formField}>
                                <div className={styles.formFieldName}>
                                    <label htmlFor="email">
                                        メールアドレス
                                        <span className={styles.formInputRequisite}>必須</span>
                                        <ErrorMessage name="email">
                                            {msg => <span className={styles.invalidForm} aria-live="polite"><FontAwesomeIcon icon={faExclamationTriangle} />{msg}</span>}
                                        </ErrorMessage>
                                    </label>
                                </div>
                                <div className={styles.formFieldInput}>
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
                            <div className={styles.formField}>
                                <div className={styles.formFieldName}>
                                    <label htmlFor="address">会社住所</label>
                                </div>
                                <div className={styles.formFieldInput}>
                                    <Field
                                        name="address"
                                        id="address"
                                        component="textarea"
                                        placeholder="住所をご記入ください"
                                    />
                                </div>
                            </div>
                            <div className={styles.formField}>
                                <div className={styles.formFieldName}>
                                    <label htmlFor="content">
                                        お問い合わせ内容
                                        <span className={styles.formInputRequisite}>必須</span>
                                        <ErrorMessage name="content">
                                            {msg => <span className={styles.invalidForm} aria-live="polite"><FontAwesomeIcon icon={faExclamationTriangle} />{msg}</span>}
                                        </ErrorMessage>
                                    </label>
                                </div>
                                <div className={styles.formFieldInput}>
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
                            <div className={styles.formSubmit}>
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



<Footer />
</>
};

export default Inquiry;
