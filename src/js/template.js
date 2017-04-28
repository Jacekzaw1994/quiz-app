import { html } from './lib';

const name = 'Quiz app';

const controls = () => {
    return html`
      <header>
        <h2 class="sg-header-primary sg-header-primary--light">
        ${name}
      </h2>
    </header>
  `;
};

export { controls };