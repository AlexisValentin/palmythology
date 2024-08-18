'use client'

import { usePathname } from 'next/navigation'
import React from 'react'
import {
  generateBreadcrumbLinks,
  getHomeBreadcrumbNode,
  parseBreadcrumbNode,
} from '../../helpers/routes/routes'

const Breadcrumbs: React.FC = () => {
  const nodes = usePathname()
    .split('/')
    .filter((node) => Boolean(node))

  if (!nodes.length) return <></>

  const breadcrumLinks = generateBreadcrumbLinks(nodes)

  return (
    <div className="flex items-center justify-center sticky bottom-0 z-10 bg-neutral-200 w-full py-2 text-xs">
      <a
        className="hover:underline hover:text-pink-500 decoration-sky-500 underline-offset-4"
        href="/"
      >
        {getHomeBreadcrumbNode()}
      </a>
      <BreadcrumbSeparator />
      {nodes.map((node, idx) => (
        <span key={node}>
          {idx === breadcrumLinks.length - 1 ? (
            <span className="text-slate-500">{`${parseBreadcrumbNode(node)}`}</span>
          ) : (
            <span>
              <a
                className="hover:underline hover:text-pink-500 decoration-sky-500 underline-offset-4"
                href={breadcrumLinks[idx]}
              >
                {node ? parseBreadcrumbNode(node) : getHomeBreadcrumbNode()}
              </a>
              <BreadcrumbSeparator />
            </span>
          )}
        </span>
      ))}
    </div>
  )
}

const BreadcrumbSeparator = () => <span className="mx-1">{' > '}</span>

export default Breadcrumbs
