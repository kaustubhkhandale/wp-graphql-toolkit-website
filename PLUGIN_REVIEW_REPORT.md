# WordPress.org Review Compliance Report

Date: June 18, 2026

## Files Modified

- `public/download-plugin/kgraph-headless-toolkit-1.1.4.zip`
  - Rebuilt from the previous plugin package with the new top-level plugin folder `kgraph-headless-toolkit`.
  - Renamed main plugin file to `kgraph-headless-toolkit.php`.
  - Removed the previous downloadable package that used the retired slug.
- `src/components/landing/LandingPage.tsx`
  - Updated download link to the new ZIP filename.
- `src/app/changelog/page.tsx`
  - Updated plugin display name and download link.

Inside the rebuilt plugin package, these files were updated:

- `kgraph-headless-toolkit.php`
- `readme.txt`
- `uninstall.php`
- `build/main-CgwzP_M1.js`
- `includes/admin/class-admin.php`
- `includes/api/class-rest-api.php`
- `includes/api/endpoints/class-categories-endpoint.php`
- `includes/api/endpoints/class-favorites-endpoint.php`
- `includes/api/endpoints/class-query-endpoint.php`
- `includes/api/endpoints/class-saved-queries-endpoint.php`
- `includes/api/endpoints/class-schema-endpoint.php`
- `includes/api/endpoints/class-settings-endpoint.php`
- `includes/api/endpoints/class-status-endpoint.php`
- `includes/api/endpoints/class-templates-endpoint.php`
- `includes/database/class-database.php`
- `includes/helpers/class-security.php`

## Slug And Branding Changes

- Plugin display name changed to `KGraph Headless Toolkit for WPGraphQL`.
- Plugin slug changed to `kgraph-headless-toolkit`.
- Text domain changed to `kgraph-headless-toolkit`.
- Main plugin file changed to `kgraph-headless-toolkit.php`.
- Readme title, installation text, description, and source URL were updated.
- Admin menu slug changed to `kgraph-headless-toolkit`.
- Development asset path changed to `/wp-content/plugins/kgraph-headless-toolkit/build`.

Internal PHP prefixes, REST namespace `hwgt/v1`, database tables, options, script handles, and JavaScript globals were intentionally left unchanged to avoid breaking existing installed data or the compiled admin app.

## REST Route Review

- Reviewed all 12 `register_rest_route()` calls.
- Every route has a `permission_callback`.
- All current endpoints are protected administrator endpoints.
- Protected callbacks now explicitly return `current_user_can( 'manage_options' )`.
- No public endpoints were found, so no endpoint needed `__return_true`.
- Existing REST nonce validation using the `X-WP-Nonce` header was retained across endpoint callbacks.

## Security Improvements

- Sanitized nonce input in `Security::verify_nonce()` with `wp_unslash()` and `sanitize_text_field()` before `wp_verify_nonce()`.
- Sanitized query type filters with `sanitize_key()` before database filtering.
- Normalized IDs with `absint()` before database reads, writes, updates, deletes, and usage increments.
- Escaped dynamic table names with `esc_sql()` before composing direct SQL statements.
- Escaped uninstall table names before `DROP TABLE` queries.
- Preserved existing `sanitize_text_field()`, `sanitize_textarea_field()`, `wp_kses_post()`, `esc_html()`, `esc_attr()`, and prepared SQL usage.

## Validation

- PHP syntax check passed for all PHP files inside the rebuilt plugin package.
- Confirmed the rebuilt ZIP contains `kgraph-headless-toolkit/kgraph-headless-toolkit.php`.
- Confirmed no remaining old display-name, old slug, or old main-file strings in source files outside ZIP binaries.

## Remaining WordPress.org Compliance Concerns

- Confirm the updated repository URL `https://github.com/kaustubhkhandale/kgraph-headless-toolkit` exists and is public before submission.
- The compiled admin bundle still contains external Google Fonts CSS imports. If WordPress.org requires all assets to be bundled locally, rebuild the admin app with local font assets.
- Direct database queries remain where WordPress APIs do not cover custom tables. Values are prepared or normalized, and dynamic table names are escaped, but Plugin Check may still request additional inline justification comments.
