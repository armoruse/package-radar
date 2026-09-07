import json
import os
from typing import List, Dict, Any, Optional

DATA_PATH = os.path.join(os.path.dirname(os.path.dirname(__file__)), 'data', 'packages.json')

def load_packages() -> List[Dict[str, Any]]:
    if not os.path.exists(DATA_PATH):
        return []
    try:
        with open(DATA_PATH, 'r', encoding='utf-8') as f:
            return json.load(f)
    except Exception as e:
        print(f'Error reading packages: {e}')
        return []

def save_packages(packages: List[Dict[str, Any]]) -> bool:
    try:
        os.makedirs(os.path.dirname(DATA_PATH), exist_ok=True)
        with open(DATA_PATH, 'w', encoding='utf-8') as f:
            json.dump(packages, f, ensure_ascii=False, indent=2)
        return True
    except Exception as e:
        print(f'Error saving packages: {e}')
        return False

def get_package_by_id(pkg_id: str) -> Optional[Dict[str, Any]]:
    packages = load_packages()
    for p in packages:
        if p.get('id') == pkg_id:
            return p
    return None

def add_package(pkg: Dict[str, Any]) -> Dict[str, Any]:
    packages = load_packages()
    packages.insert(0, pkg)
    save_packages(packages)
    return pkg

def update_package(pkg_id: str, updates: Dict[str, Any]) -> Optional[Dict[str, Any]]:
    packages = load_packages()
    for i, p in enumerate(packages):
        if p.get('id') == pkg_id:
            packages[i].update(updates)
            save_packages(packages)
            return packages[i]
    return None

def delete_package(pkg_id: str) -> bool:
    packages = load_packages()
    original_len = len(packages)
    packages = [p for p in packages if p.get('id') != pkg_id]
    if len(packages) < original_len:
        save_packages(packages)
        return True
    return False
