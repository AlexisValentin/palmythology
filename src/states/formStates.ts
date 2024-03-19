interface UserAccountFormState {
  identifier: string
  password: string
}

export const userAccountFormInitialState: UserAccountFormState = {
  identifier: '',
  password: '',
}
