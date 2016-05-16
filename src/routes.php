<?php
/**
 * This file is part of the MWD Microsite project.
 *
 * (c) Wensheng Yan <yanwsh@gmail.com>
 * Date: 5/15/16
 *
 * For the full copyright and license information, please view the LICENSE
 * file that was distributed with this source code.
 */

// Routes
$app->get('/[{name}]', function ($request, $response, $args) {
    // Render index view
    return $this->renderer->render($response, 'Core/index.twig', $args);
});