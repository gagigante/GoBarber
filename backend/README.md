# Recuperação de senha

**RF**

- O usuário deve poder recuperar sua senha informando o seu e-mail
- O usuário deve receber um e-mail com instruções de recuperação de senha
- O usuário deve poder resetar sua senha

**RNF**

- Utilizar mail trap para testar o envio de e-mail em ambiente de desenvolvimento
- Utilizar amazon SES para envio em produção
- O envio de e-mails devem acontecer em segundo plano (background job)

**RN**

- O link enviado por e-mail para resetar senha deve resetar em 2 horas
- O usuário precisa confirmar a nova senha ao reseta-la

# Atualização do perfil

**RF**

- O usuário deve poder atualizar seu nome, email e senha

**RN**

- O usuário não pode alterar seu e-mail para um e-mail já utilizado
- Para atualizar sua senha o usuário deve informar a senha antiga
- Para atualizar a sua senha, o usuário precisa confirmar a nova senha

# Painel do prestador

**RF**

- O usuário deve poder listar seus agendamentos de um dia específico
- O prestador deve receber uma notificação sempre que houver uma notificação
- O prestador deve visualizar as notificações não lidas

**RNF**

- Os agendamento do prestador no dia devem ser armazenados em cache
- As notificações do prestador devem ser armazenadas no mongodb
- As notificações do prestador devem ser enviadas em tempo real utilizando socket.io

**RN**

- A notificação deve ter um status de lida ou não lida

# Agendamento de serviços

**RF**

- O usuário deve poder listar todos os prestadores cadastrados
- O usuário deve poder listar os dias de um mês com pelo menos um horário disponível de um prestador
- O usuário deve poder listar horários disponíveis em um dia específico de um prestador
- O usuário deve poder realizar um novo agendamento com um prestador

**RNF**

- A listagem de prestadores deve ser armazenada em cache

**RN**

- Cada agendamento deve durar 1h exatamente
- Os agendamentos devem estar disponíveis entre 8h às 18h (Primeiro às 8h; último 18h)
- O usuário não pode agendar em um horário já agendado
- O usuário não pode agendar em um horário passado
- O usuário não pode agendar serviços consigo mesmo
