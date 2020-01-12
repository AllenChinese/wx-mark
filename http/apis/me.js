import wxRequest from '../wxRequest'

/**
 * 问卷调查提交
 */
export const questionnaireSubmit = (payload) => {
  return wxRequest({
    method: 'post',
    url: 'v1/questionnaire/submit',
    data: payload,
  })
}
