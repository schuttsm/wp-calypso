/** @format */
/**
 * External dependencies
 */
import i18n from 'i18n-calypso';
import React from 'react';

/**
 * Internal Dependencies
 */
import { sectionify } from 'lib/route';
import analytics from 'lib/analytics';
import { setDocumentHeadTitle as setTitle } from 'state/document-head/actions';
import CustomizeComponent from 'my-sites/customize/main';

export function customize( context, next ) {
	const basePath = sectionify( context.path );

	analytics.pageView.record( basePath, 'Customizer' );

	// FIXME: Auto-converted from the Flux setTitle action. Please use <DocumentHead> instead.
	context.store.dispatch( setTitle( i18n.translate( 'Customizer', { textOnly: true } ) ) );

	context.primary = React.createElement( CustomizeComponent, {
		domain: context.params.domain || '',
		pathname: context.pathname,
		prevPath: context.prevPath || '',
		query: context.query,
		panel: context.params.panel,
	} );

	next();
}
