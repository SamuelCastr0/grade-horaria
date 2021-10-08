import { initModal } from './modal.js';

/**
 * Chama a função init modal e adiciona os eventos para todos os tipos de modais pertencentes ao CRUD de disciplinas
 */
export default function initModalsEvents() {
  initModal('[data-open="edit"]', '[data-modal="edit"]');
  initModal('[data-open="add"]', '[data-modal="add"]');
  initModal('[data-open="delete"]', '[data-modal="delete"]');
  initModal('[data-open="view"]', '[data-modal="view"]');
}
