import {Markup} from "telegraf";

export function actionButtons () {
    return Markup.keyboard(
        [
            Markup.button.callback('📋 Список справ', 'list'),
            Markup.button.callback('✅ Завершити', 'done'),
            Markup.button.callback('📝 Редагувати', 'edit'),
            Markup.button.callback('🗑 Видалити', 'delete'),
        ],{
            columns: 2
        }
    )
}