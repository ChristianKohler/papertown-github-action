# Papertown Github Action

This action runs https://github.com/ChristianKohler/papertown

Papertown syncs you personal markdown blog with blog platforms like dev.to

## Inputs

### devto-api-key (required)

See: https://github.com/ChristianKohler/papertown

### root-folder

See: https://github.com/ChristianKohler/papertown

### image-root-url-github

See: https://github.com/ChristianKohler/papertown

### dry-run

See: https://github.com/ChristianKohler/papertown

## Example usage

```yaml
 - name: Papertown Sync
        uses: ChristianKohler/papertown-github-action@v1.0.5
        with:
          devto-api-key: ${{ secrets.DEVTO_API_KEY }}
```
