/*
 * Copyright (c) 2014-2023 Bjoern Kimminich & the OWASP Coffee Shop contributors.
 * SPDX-License-Identifier: MIT
 */

import config = require('config')
import { Request, Response } from 'express'

const utils = require('../lib/utils')

module.exports = function retrieveAppVersion () {
  return (_req: Request, res: Response) => {
    res.json({
      version: config.get('application.showVersionNumber') ? utils.version() : ''
    })
  }
}
