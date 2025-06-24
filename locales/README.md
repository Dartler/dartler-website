# Dartler Website Translation System

## Overview
The website uses a JSON-based translation system with external language files for easy maintenance and localization.

## File Structure
```
locales/
├── en.json    # English translations
├── de.json    # German translations
└── [other languages].json
```

## Adding New Languages

1. Create a new JSON file in the `locales/` directory (e.g., `fr.json` for French)
2. Copy the structure from `en.json` and translate all values
3. Update the language detection logic in `index.html` if needed

## Translation File Format

Each language file is a JSON object with key-value pairs:

```json
{
  "nav_app": "App",
  "nav_ecosystem": "Ecosystem",
  "hero_title": "Your Complete Darts Universe",
  ...
}
```

## How It Works

1. **Language Detection**: Automatically detects browser language on first visit
2. **File Loading**: Dynamically loads translation files via fetch API
3. **Caching**: Translations are cached in memory after first load
4. **Fallback**: Falls back to English if a translation file fails to load
5. **Persistence**: User's language choice is saved in localStorage

## Best Practices

1. **Key Naming**: Use descriptive, hierarchical key names (e.g., `section_feature_title`)
2. **Consistency**: Keep the same key structure across all language files
3. **Testing**: Test all languages after making changes
4. **Encoding**: Use UTF-8 encoding for all translation files
5. **Validation**: Validate JSON files to prevent syntax errors

## Adding New Translatable Content

1. Add the text content to HTML with `data-lang-key` attribute:
   ```html
   <p data-lang-key="new_content_key">Default text</p>
   ```

2. Add the translation key to all language files:
   ```json
   {
     "new_content_key": "Translated text"
   }
   ```

## Browser Compatibility

- Modern browsers with fetch API support
- Graceful degradation: shows default HTML content if JavaScript fails
- Supports all major browsers (Chrome, Firefox, Safari, Edge)
