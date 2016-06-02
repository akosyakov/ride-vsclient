/*******************************************************************************
 * Copyright (c) 2016 TypeFox GmbH (http://www.typefox.io) and others.
 * All rights reserved. This program and the accompanying materials
 * are made available under the terms of the Eclipse Public License v1.0
 * which accompanies this distribution, and is available at
 * http://www.eclipse.org/legal/epl-v10.html
 *******************************************************************************/
'use strict';

import * as Path from 'path';
import * as ChildProcess from 'child_process';
import { Disposable, ExtensionContext } from 'vscode';
import { LanguageClient, LanguageClientOptions, StreamInfo } from 'vscode-languageclient';

export function activate(context: ExtensionContext) {
	let languageServerJarPath = Path.resolve(context.extensionPath, 'lib', 'ride-languageserver.jar')
	let serverInfo = () => {
		let process = ChildProcess.exec('java -jar ' + languageServerJarPath + ' debug')
		let result: StreamInfo = {
			writer: process.stdin,
			reader: process.stdout
		}
		return Promise.resolve(result);	
	}
	
	let clientOptions: LanguageClientOptions = {
		documentSelector: ['r']
	}
	
	// Create the language client and start the client.
	let disposable = new LanguageClient('Xtext Server', serverInfo, clientOptions).start();
	
	// Push the disposable to the context's subscriptions so that the 
	// client can be deactivated on extension deactivation
	context.subscriptions.push(disposable);
}