import { screen } from '@testing-library/vue';
import userEvent from '@testing-library/user-event';
import LoginPopup from '@/components/common/LoginPopup.vue';
import { useUserStore } from '@/stores';
import { renderComponent } from '@/__tests__/unit/render';

describe('LoginPopup component', () => {
  it('renders the correct content', () => {
    renderComponent(LoginPopup);
    expect(screen.getByRole('heading', { name: /login!/i })).toBeInTheDocument();
    expect(screen.getByText('✗')).toBeInTheDocument();
    expect(screen.getByLabelText('Account')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });

  it('form fields should be required', async () => {
    renderComponent(LoginPopup);
    await userEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(screen.getByLabelText('Account')).toBeInvalid();
    expect(screen.getByLabelText('Password')).toBeInvalid();
  });

  it('login success', async () => {
    const account = 'root';
    const password = '123456789';
    const userStore = useUserStore();

    renderComponent(LoginPopup);
    await userEvent.type(screen.getByRole('textbox', { name: /account/i }), account);
    await userEvent.type(screen.getByLabelText('Password'), password);
    await userEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(userStore.user).toEqual({ account });
    expect(window.localStorage.getItem('coding_standards_token')).toEqual(password);
    expect(window.localStorage.getItem('coding_standards_account')).toEqual(account);
  });

  it('login error', async () => {
    const account = 'root';
    const password = '12345678';
    renderComponent(LoginPopup);
    const accountForm = screen.getByRole('textbox', { name: /account/i });
    const passwordForm = screen.getByLabelText('Password');

    await userEvent.type(accountForm, account);
    await userEvent.type(passwordForm, password);
    await userEvent.click(screen.getByRole('button', { name: 'Login' }));
    expect(accountForm).toHaveTextContent('');
    expect(passwordForm).toHaveTextContent('');
  });
});
