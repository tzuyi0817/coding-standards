import { screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import LoginPopup from '@/components/common/LoginPopup.vue';
import { useUserStore } from '@/stores';
import { setPinia, renderComponent } from '@/__tests__/unit/render';

describe('LoginPopup component', () => {
  const pinia = setPinia();

  it('renders the correct content', () => {
    renderComponent(LoginPopup, { pinia });
    expect(screen.getByRole('heading', { name: /login!/i })).toBeInTheDocument();
    expect(screen.getByText('✗')).toBeInTheDocument();
    expect(screen.getByLabelText('Account')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  it('form fields should be required', async () => {
    renderComponent(LoginPopup, { pinia });
    await userEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(screen.getByLabelText('Account')).toBeInvalid();
    expect(screen.getByLabelText('Password')).toBeInvalid();
  });

  it('login test', async () => {
    const account = 'root';
    const password = '123456789';
    const userStore = useUserStore();

    renderComponent(LoginPopup, { pinia });
    await userEvent.type(screen.getByRole('textbox', { name: /account/i }), account);
    await userEvent.type(screen.getByLabelText('Password'), password);
    await userEvent.click(screen.getByRole('button', { name: 'Login' }));
    console.log(userStore.user);
    expect(userStore.user).toEqual({ account });
    expect(window.localStorage.getItem('coding_standards_token')).toEqual(password);
    expect(window.localStorage.getItem('coding_standards_account')).toEqual(account);
  });
});
