<h1> Template de projeto React-native com expo:</h1>

<h2>📦 Tecnologias Utilizadas</h2>

<h3>🔹 Pré-configuradas ao criar o projeto com <code>yarn create expo-app</code></h3>
<p>Estes pacotes já fazem parte do ambiente padrão do Expo e vêm incluídos automaticamente:</p>

<ul>
    <li><a href="https://reactnative.dev/" target="_blank">React Native</a> - Framework para desenvolvimento mobile</li>
    <li><a href="https://docs.expo.dev/" target="_blank">Expo</a> - Ferramenta que simplifica o desenvolvimento com React Native</li>
    <li><a href="https://reactnavigation.org/" target="_blank">React Navigation</a> - Biblioteca para navegação entre telas</li>
    <li><a href="https://yarnpkg.com/" target="_blank">Yarn</a> - Gerenciador de pacotes</li>
</ul>

<h3>🔹 Tecnologias manualmente adicionadas e configuradas</h3>
<p>Estas foram <strong>adicionadas/modificadas manualmente</strong> para melhorar o projeto:</p>

<ul>
    <li><a href="https://expo.github.io/router/" target="_blank">Expo Router</a> - Navegação baseada em diretórios (File-based Routing)</li>
    <li><a href="https://www.nativewind.dev/" target="_blank">NativeWind</a> - Estilização usando Tailwind CSS no React Native</li>
    <li><a href="https://tailwindcss.com/" target="_blank">Tailwind CSS</a> - Framework CSS para estilos utilitários</li>
    <li><a href="https://jestjs.io/" target="_blank">Jest</a> - Framework de testes para JavaScript</li>
    <li><a href="https://github.com/expo/expo/tree/main/packages/expo-splash-screen" target="_blank">Expo Splash Screen</a> - Gerenciamento da tela de carregamento</li>
    <li><a href="https://github.com/software-mansion/react-native-reanimated" target="_blank">React Native Reanimated</a> - Animações avançadas no React Native</li>
    <li><a href="https://github.com/software-mansion/react-native-gesture-handler" target="_blank">React Native Gesture Handler</a> - Melhor suporte a gestos no app</li>
</ul>
<hr>
<br>
<h1>Configuração e Instalação</h2>

<h2>📌 Como rodar o projeto localmente</h2>

<h3>1️⃣ Pré-requisitos</h3>

<ul>
    <li>Instalar <strong>Node.js</strong> (última versão LTS): <a href="https://nodejs.org/" target="_blank">Node.js Download</a></li>
    <li>Verificar a versão do Node.js instalada:
        <pre><code>node -v</code></pre>
    </li>
    <li>Se a versão estiver desatualizada, atualizar via nvm:
        <pre><code>nvm install --lts
nvm use --lts</code></pre>
    </li>
    <li>Verificar e atualizar <strong>npm</strong>:
        <pre><code>npm -v
npm install -g npm</code></pre>
    </li>
    <li>Instalar e atualizar <strong>Yarn 4 (Berry)</strong>:
        <pre><code>corepack enable
yarn set version berry</code></pre>
    </li>
    <li>Verificar a versão do Yarn:
        <pre><code>yarn --version</code></pre>
    </li>
    <li>Configurar compatibilidade do Yarn Berry com Expo:
        <pre><code>yarn config set nodeLinker node-modules</code></pre>
    </li>
    <!-- <li>Instalar <strong>Expo CLI</strong>:
        <pre><code>yarn dlx expo-cli</code></pre>
    </li> -->
</ul>

<hr>

<h3>2️⃣ Baixe o código fonte do repositório</h3>

<p>Baixe o código-fonte do projeto como arquivo zip, extraia a pasta <code>template-react-native-expo</code> e acesse o diretório extraído</p>

<h3>3️⃣ Instalar dependências</h3>

<p>Execute o seguinte comando para instalar todas as dependências do projeto:</p>

<pre><code>yarn install</code></pre>

<h3>4️⃣ Rodar o projeto</h3>

<p>Para iniciar o servidor do Expo, execute:</p>

<pre><code>yarn expo start</code></pre>

<hr>

<h1>📌 Criando um Novo Projeto React Native com Expo e Yarn</h1>

<p>Se você deseja criar um novo projeto do zero, siga os passos abaixo:</p>

<h3>1️⃣ Instalar Node.js e Gerenciador de Pacotes</h3>

<ul>
    <li>Baixe e instale a última versão LTS do <strong>Node.js</strong>: 
        <a href="https://nodejs.org/" target="_blank">Node.js Download</a></li>
    <li>Verifique se o Node.js está instalado corretamente:
        <pre><code>node -v</code></pre>
    </li>
    <li>Instale e ative o <strong>Yarn 4 (Berry)</strong>:
        <pre><code>corepack enable
yarn set version berry</code></pre>
    </li>
    <li>Verifique a versão instalada do Yarn:
        <pre><code>yarn --version</code></pre>
    </li>
</ul>

<hr>

<h3>2️⃣ Criar um Novo Projeto Expo</h3>

<p>Use o comando abaixo para criar um novo projeto React Native com Expo:</p>

<pre><code>yarn create expo-app MeuNovoApp</code></pre>

<p>Substitua <code>MeuNovoApp</code> pelo nome do seu projeto.</p>

<h3>3️⃣ Acessar o diretório do projeto</h3>

<pre><code>cd MeuNovoApp</code></pre>

<hr>

<h3>4️⃣ Configurar Yarn Berry para compatibilidade com Expo</h3>

<p>Por padrão, o Yarn Berry usa o sistema PnP, que pode causar incompatibilidades com o Expo. Para evitar problemas, altere a configuração:</p>

<pre><code>yarn config set nodeLinker node-modules</code></pre>

<h3>5️⃣ Instalar Dependências</h3>

<pre><code>yarn install</code></pre>

<hr>

<h3>6️⃣ Rodar o projeto Expo</h3>

<p>Para iniciar o servidor de desenvolvimento do Expo:</p>

<pre><code>yarn expo start</code></pre>

<ul>
    <li>Para rodar no **Android**:
        <pre><code>yarn expo run:android</code></pre>
    </li>
    <li>Para rodar no **navegador**:
        <pre><code>yarn expo start --web</code></pre>
    </li>
</ul>

<hr>

<h3>📌 Dicas Extras</h3>

<ul>
    <li>Se precisar atualizar todas as dependências do projeto:
        <pre><code>yarn up "*" --recursive</code></pre>
    </li>
    <li>Se precisar verificar problemas no Expo:
        <pre><code>npx expo-doctor</code></pre>
    </li>
    <li>Se houver problemas, tente limpar o cache e reinstalar:
        <pre><code>yarn cache clean
rm -rf node_modules .yarn
yarn install</code></pre>
    </li>
</ul>

<hr>

<h3>📌 Rodando o projeto no emulador do Android Studio no Ubuntu WSL</h3>

<ul>
    <li>Instale o <strong>Android Studio</strong> no Windows e configure um Virtual Device.</li>
    <li>Instale o <strong>Android SDK Platform-Tools</strong>.</li>
    <li>Baixe e extraia o <a href="https://developer.android.com/studio#android-studio-downloads" target="_blank">Android Commandline Tools</a> em um diretório como <code>~/android_sdk</code>.</li>
    <li>Adicione as seguintes variáveis de ambiente ao <code>~/.bashrc</code>:
        <pre><code>ANDROID_HOME=$HOME/android_sdk
export PATH=$PATH:$HOME/android_sdk/cmdline-tools/bin</code></pre>
    </li>
    <li>Copie o <code>adb.exe</code> do Windows para permitir execução no WSL:
    <br>
        <b>OBS:</b> Substitua <code>SeuUsuario</code> pelo nome do seu usuário ou indique o caminho correto (normalmente `/mnt/c/Users/SeuUsuario/AppData/Local/Android/Sdk/platform-tools/adb.exe`).
        <pre><code>sudo cp /mnt/d/Android/Sdk/platform-tools/adb.exe /mnt/d/Android/Sdk/platform-tools/adb</code></pre>
    </li>
    <li>Se houver problemas, tente copiar também:
        <pre><code>sudo cp /mnt/d/Android/Sdk/emulator/emulator.exe /mnt/d/Android/Sdk/emulator/emulator</code></pre>
    </li>
    <li>Inicie o emulador e execute o Expo:
        <pre><code>yarn expo start</code></pre>
    </li>
    <li>Pressione <code>a</code> no terminal para rodar o app no emulador.</li>
</ul>
